import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  amaz_score: yup.number().integer().nullable(),
  startup_id: yup.string().nullable(),
});
