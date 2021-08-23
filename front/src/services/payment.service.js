import { request } from "./generic.service";

const getIntent = (data) => request({ url: `payment`, method: "post", data });

export { getIntent };
