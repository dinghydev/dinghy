import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_PROXY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_proxy;',
  },
  _width: 21,
  _height: 21,
}

export function VeeamProxy(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_PROXY}
      {...props}
      _style={extendStyle(VEEAM_PROXY, props)}
    />
  )
}
