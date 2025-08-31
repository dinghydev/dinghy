import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_WATCH_LIST_SCREENING = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Watch_List_Screening',
  },
  _width: 60,
  _height: 60,
}

export function SapWatchListScreening(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_WATCH_LIST_SCREENING}
      {...props}
      _style={extendStyle(SAP_WATCH_LIST_SCREENING, props)}
    />
  )
}
