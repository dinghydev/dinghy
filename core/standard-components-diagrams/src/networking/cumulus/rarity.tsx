import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RARITY = {
  _style: {
    entity: 'fillColor=#83389B;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function Rarity(props: DiagramNodeProps) {
  return <Shape {...RARITY} {...props} _style={extendStyle(RARITY, props)} />
}
