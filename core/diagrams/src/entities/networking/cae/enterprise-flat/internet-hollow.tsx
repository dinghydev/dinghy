import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNET_HOLLOW = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.internet_hollow',
  },
  _width: 50,
  _height: 31,
}

export function InternetHollow(props: NodeProps) {
  return (
    <Shape
      {...INTERNET_HOLLOW}
      {...props}
      _style={extendStyle(INTERNET_HOLLOW, props)}
    />
  )
}
