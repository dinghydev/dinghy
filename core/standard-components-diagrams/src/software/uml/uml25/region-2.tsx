import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REGION_2 = {
  _style: 'text;align=right;',
  _width: 1,
  _height: 100,
}

export function Region2(props: DiagramNodeProps) {
  return (
    <Shape {...REGION_2} {...props} _style={extendStyle(REGION_2, props)} />
  )
}
