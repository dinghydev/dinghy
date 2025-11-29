import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;strokeColor=#B3B3B3;arcSize=20;absoluteArcSize=1;',
  },
  _width: 0,
  _height: 240,
}

export function Card(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD)} />
}
