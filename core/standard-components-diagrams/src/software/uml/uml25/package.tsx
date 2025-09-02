import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PACKAGE = {
  _style: {
    entity:
      'shape=folder;fontStyle=1;tabWidth=80;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;whiteSpace=wrap;',
  },
  _original_width: 150,
  _original_height: 80,
}

export function Package(props: DiagramNodeProps) {
  return <Shape {...PACKAGE} {...props} _style={extendStyle(PACKAGE, props)} />
}
