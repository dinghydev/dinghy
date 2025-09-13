import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABS_4 = {
  _style: {
    entity: 'shape=line;strokeColor=#dddddd;',
  },
  _width: 4,
  _height: 45,
}

export function Tabs4(props: DiagramNodeProps) {
  return <Shape {...TABS_4} {...props} _style={extendStyle(TABS_4, props)} />
}
