import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BROWSER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.browser;',
  _width: 47.5,
  _height: 72.5,
}

export function Browser(props: DiagramNodeProps) {
  return <Shape {...BROWSER} {...props} />
}
