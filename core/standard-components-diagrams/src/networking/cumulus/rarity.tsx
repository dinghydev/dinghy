import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RARITY = {
  _style: {
    entity: 'fillColor=#83389B;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Rarity(props: DiagramNodeProps) {
  return <Shape {...RARITY} {...props} _style={extendStyle(RARITY, props)} />
}
