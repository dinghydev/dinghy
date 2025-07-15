import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_2 = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;strokeColor=#B3B3B3;arcSize=20;absoluteArcSize=1;collapsible=0;recursiveResize=1;',
  _width: 0,
  _height: 160,
}

export function Card2(props: DiagramNodeProps) {
  return <Shape {...CARD_2} {...props} />
}
