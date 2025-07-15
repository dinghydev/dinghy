import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FARK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fark;fillColor=#B1B0C7;gradientColor=#ffffff;strokeColor=#B1B0C7',
  _width: 44.2,
  _height: 70.2,
}

export function Fark(props: DiagramNodeProps) {
  return <Shape {...FARK} {...props} />
}
