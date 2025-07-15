import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FULL_BLEED_DIVIDERS = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function FullBleedDividers(props: DiagramNodeProps) {
  return <Shape {...FULL_BLEED_DIVIDERS} {...props} />
}
