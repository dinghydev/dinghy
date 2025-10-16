import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAP = {
  _style: {
    entity:
      'image;image=img/lib/sap/SAP_Logo.svg;editableCssRules=.*;verticalLabelPosition=middle;labelBackgroundColor=none;verticalAlign=middle;imageAspect=0;labelPosition=right;align=left;fontSize=16;fontStyle=1;spacingLeft=0;fontColor=#002A86;spacing=0;strokeColor=none;',
  },
  _width: 37,
  _height: 19,
}

export function Sap(props: DiagramNodeProps) {
  return <Shape {...SAP} {...props} _style={extendStyle(SAP, props)} />
}
