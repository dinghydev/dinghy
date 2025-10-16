import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PACKAGE = {
  _style: {
    entity:
      'shape=folder;fontStyle=1;tabWidth=80;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;whiteSpace=wrap;',
  },
  _width: 150,
  _height: 80,
}

export function Package(props: DiagramNodeProps) {
  return <Shape {...PACKAGE} {...props} _style={extendStyle(PACKAGE, props)} />
}
