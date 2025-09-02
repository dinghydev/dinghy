import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YOUTUBE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youtube;fillColor=#FF2626;gradientColor=#B5171F',
  },
  _original_width: 157.20000000000002,
  _original_height: 65.8,
}

export function Youtube(props: DiagramNodeProps) {
  return <Shape {...YOUTUBE} {...props} _style={extendStyle(YOUTUBE, props)} />
}
