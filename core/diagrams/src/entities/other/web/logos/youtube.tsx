import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YOUTUBE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youtube;fillColor=#FF2626;gradientColor=#B5171F',
  },
  _width: 157.20000000000002,
  _height: 65.8,
}

export function Youtube(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, YOUTUBE)} />
}
