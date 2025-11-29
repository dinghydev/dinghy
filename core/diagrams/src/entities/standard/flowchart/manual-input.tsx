import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANUAL_INPUT = {
  _style: {
    entity:
      'html=1;strokeWidth=2;shape=manualInput;whiteSpace=wrap;rounded=1;size=26;arcSize=11;',
  },
  _width: 100,
  _height: 60,
}

export function ManualInput(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MANUAL_INPUT)} />
}
