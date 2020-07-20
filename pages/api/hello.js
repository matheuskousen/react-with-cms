// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../credent/google-seets-api.json";

export default async (req, res) => {
  const doc = new GoogleSpreadsheet(
    "1hyBJx05RO04Idj2ahufyFDT1RbiblRS42b3Wl84WVKY"
  );
  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0];

  const datas = await sheet.getRows();
  const values = datas.map(({ name, bairro }) => {
    return {
      name,
      bairro,
    };
  });
  res.send({
    usrs: values,
  });
};
