import { ZONE_EUREKA_HYDATOS, ZONE_EUREKA_PAGOS, ZONE_EUREKA_PYROS } from "xivweather"

export const getZone = (zone: string) => {
  switch(zone) {
    case "Hydatos":
      return ZONE_EUREKA_HYDATOS.Name
    case "Pagos":
      return ZONE_EUREKA_PAGOS.Name
    case "Pyros":
      return ZONE_EUREKA_PYROS.Name
    default:
      return ZONE_EUREKA_HYDATOS.Name
  }
}