import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REGION_2 = {
  _style: {
    entity: 'text;align=right;',
  },
  _original_width: 1,
  _original_height: 100,
}

export function Region2(props: DiagramNodeProps) {
  return (
    <Shape {...REGION_2} {...props} _style={extendStyle(REGION_2, props)} />
  )
}
