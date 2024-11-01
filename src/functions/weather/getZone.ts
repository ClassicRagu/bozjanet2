import { ZONE_EUREKA_HYDATOS, ZONE_EUREKA_PAGOS, ZONE_EUREKA_PYROS } from "xivweather"

export const getZone = (zone: string) => {
  switch(zone) {
    case "Hydatos":
      return ZONE_EUREKA_HYDATOS
    case "Pagos":
      return ZONE_EUREKA_PAGOS
    case "Pyros":
      return ZONE_EUREKA_PYROS
    default:
      return ZONE_EUREKA_HYDATOS
  }
}