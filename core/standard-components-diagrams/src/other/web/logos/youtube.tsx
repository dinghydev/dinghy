import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YOUTUBE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youtube;fillColor=#FF2626;gradientColor=#B5171F',
  _width: 157.20000000000002,
  _height: 65.8,
}

export function Youtube(props: DiagramNodeProps) {
  return <Shape {...YOUTUBE} {...props} />
}
