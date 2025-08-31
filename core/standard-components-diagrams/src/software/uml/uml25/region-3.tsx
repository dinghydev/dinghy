import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REGION_3 = {
  _style: {
    entity: 'text;align=left;',
  },
  _width: 2,
  _height: 100,
}

export function Region3(props: DiagramNodeProps) {
  return (
    <Shape {...REGION_3} {...props} _style={extendStyle(REGION_3, props)} />
  )
}
