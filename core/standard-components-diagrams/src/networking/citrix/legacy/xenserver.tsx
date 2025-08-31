import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XENSERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenserver;',
  },
  _width: 76.5,
  _height: 90,
}

export function Xenserver(props: DiagramNodeProps) {
  return (
    <Shape {...XENSERVER} {...props} _style={extendStyle(XENSERVER, props)} />
  )
}
