import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YOUTUBE_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youtube_2;fillColor=#FF2626;gradientColor=#B5171F',
  _width: 46.400000000000006,
  _height: 32.6,
}

export function Youtube2(props: DiagramNodeProps) {
  return <Shape {...YOUTUBE_2} {...props} />
}
