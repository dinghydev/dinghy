import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_PHONE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.mobile;',
  },
  _width: 25.255,
  _height: 50,
}

export function MobilePhone(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_PHONE}
      {...props}
      _style={extendStyle(MOBILE_PHONE, props)}
    />
  )
}
