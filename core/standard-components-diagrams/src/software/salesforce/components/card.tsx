import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;strokeColor=#B3B3B3;arcSize=20;absoluteArcSize=1;',
  },
  _original_width: 0,
  _original_height: 240,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
