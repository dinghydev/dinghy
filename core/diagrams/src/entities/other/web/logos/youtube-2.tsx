import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YOUTUBE_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youtube_2;fillColor=#FF2626;gradientColor=#B5171F',
  },
  _width: 46.400000000000006,
  _height: 32.6,
}

export function Youtube2(props: NodeProps) {
  return (
    <Shape {...YOUTUBE_2} {...props} _style={extendStyle(YOUTUBE_2, props)} />
  )
}
