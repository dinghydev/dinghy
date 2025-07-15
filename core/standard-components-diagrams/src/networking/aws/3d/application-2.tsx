import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.application2;fillColor=#86E83A;strokeColor=#B0F373;aspect=fixed;',
  _width: 62,
  _height: 53,
}

export function Application2(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_2} {...props} />
}
