
import { LangConfig } from "./types";

const lang: LangConfig = {
    years() { return "tahun"; },
    months() { return "bulan"; },
    weeks() { return "minggu"; },
    days() { return "hari"; },
    hours() { return "jam"; },
    minutes() { return "menit"; },
    seconds() { return "detik"; },
    decimal: ","
};

export default lang;