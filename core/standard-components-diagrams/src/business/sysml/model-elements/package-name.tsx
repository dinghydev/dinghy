import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PACKAGE_NAME = {
  _style: {
    entity:
      'shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;strokeWidth=2;html=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 160,
  _original_height: 90,
}

export function PackageName(props: DiagramNodeProps) {
  return (
    <Shape
      {...PACKAGE_NAME}
      {...props}
      _style={extendStyle(PACKAGE_NAME, props)}
    />
  )
}
