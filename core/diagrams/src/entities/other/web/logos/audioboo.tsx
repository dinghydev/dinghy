import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUDIOBOO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.audioboo;fillColor=#B9217E',
  },
  _width: 54,
  _height: 79.4,
}

export function Audioboo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AUDIOBOO)} />
}
