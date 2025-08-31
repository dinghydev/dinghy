import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_ARIBA_TEXT_ONLY = {
  _style:
    'text;html=1;align=left;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=16;fontColor=#1A2733;fontFamily=Helvetica;fontStyle=1',
  _width: 120,
  _height: 30,
}

export function SapAribaTextOnly(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_ARIBA_TEXT_ONLY}
      {...props}
      _style={extendStyle(SAP_ARIBA_TEXT_ONLY, props)}
    />
  )
}
