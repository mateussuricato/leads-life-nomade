import express from "express"
import { getIndex, getObrigado, postCriar, deletar, getDetalhes, getLeads} from "../controller/Controllador.js";

export const routers = express.Router()

routers.get("/", getIndex);

routers.get("/obrigado", getObrigado);

routers.get("/leitores", getLeads);

routers.post("/create", postCriar);

routers.get("/delete/:id", deletar)

routers.get('/detalhes/:id', getDetalhes)