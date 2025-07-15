import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORXWEB = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.worxweb;fillColor=#2A3437;gradientColor=#B8B9B9;gradientDirection=south;',
  _width: 38,
  _height: 38,
}

export function Worxweb(props: DiagramNodeProps) {
  return <Shape {...WORXWEB} {...props} />
}
