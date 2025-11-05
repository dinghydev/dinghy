import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.tablet;pointerEvents=1;',
  },
  _width: 50,
  _height: 37.5,
}

export function Tablet(props: NodeProps) {
  return <Shape {...TABLET} {...props} _style={extendStyle(TABLET, props)} />
}
