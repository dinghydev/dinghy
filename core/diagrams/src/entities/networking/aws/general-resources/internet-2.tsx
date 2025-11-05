import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNET_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.internet_alt1;',
  },
  _width: 78,
  _height: 48,
}

export function Internet2(props: NodeProps) {
  return (
    <Shape {...INTERNET_2} {...props} _style={extendStyle(INTERNET_2, props)} />
  )
}
