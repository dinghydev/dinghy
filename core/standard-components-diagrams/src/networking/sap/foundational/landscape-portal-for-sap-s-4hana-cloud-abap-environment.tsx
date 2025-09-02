import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LANDSCAPE_PORTAL_FOR_SAP_S_4HANA_CLOUD_ABAP_ENVIRONMENT = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Landscape_Portal_for_SAP_S4HANA_Cloud_ABAP_Environment',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LandscapePortalForSapS4hanaCloudAbapEnvironment(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...LANDSCAPE_PORTAL_FOR_SAP_S_4HANA_CLOUD_ABAP_ENVIRONMENT}
      {...props}
      _style={extendStyle(
        LANDSCAPE_PORTAL_FOR_SAP_S_4HANA_CLOUD_ABAP_ENVIRONMENT,
        props,
      )}
    />
  )
}
