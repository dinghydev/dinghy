import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STARTLAP = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.startlap;fillColor=#B9E6F0;gradientColor=#3062A2',
  _width: 82,
  _height: 84.2,
}

export function Startlap(props: DiagramNodeProps) {
  return (
    <Shape {...STARTLAP} {...props} _style={extendStyle(STARTLAP, props)} />
  )
}
