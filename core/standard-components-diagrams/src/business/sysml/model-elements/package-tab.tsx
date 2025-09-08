import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PACKAGE_TAB = {
  _style: {
    entity:
      'shape=folder;xSize=90;align=left;spacingLeft=10;align=left;verticalAlign=top;spacingLeft=5;spacingTop=-4;tabWidth=70;tabHeight=20;tabPosition=left;html=1;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 120,
}

export function PackageTab(props: DiagramNodeProps) {
  return (
    <Shape
      {...PACKAGE_TAB}
      {...props}
      _style={extendStyle(PACKAGE_TAB, props)}
    />
  )
}
