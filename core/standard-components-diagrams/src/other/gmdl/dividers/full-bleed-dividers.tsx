import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FULL_BLEED_DIVIDERS = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
}

export function FullBleedDividers(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULL_BLEED_DIVIDERS}
      {...props}
      _style={extendStyle(FULL_BLEED_DIVIDERS, props)}
    />
  )
}
