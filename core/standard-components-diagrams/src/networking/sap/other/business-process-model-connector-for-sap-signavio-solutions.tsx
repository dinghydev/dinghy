import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_PROCESS_MODEL_CONNECTOR_FOR_SAP_SIGNAVIO_SOLUTIONS = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Business_Process_Model_Connector_for_SAP_Signavio_Solutions',
  _width: 60,
  _height: 60,
}

export function BusinessProcessModelConnectorForSapSignavioSolutions(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...BUSINESS_PROCESS_MODEL_CONNECTOR_FOR_SAP_SIGNAVIO_SOLUTIONS}
      {...props}
      _style={extendStyle(
        BUSINESS_PROCESS_MODEL_CONNECTOR_FOR_SAP_SIGNAVIO_SOLUTIONS,
        props,
      )}
    />
  )
}
