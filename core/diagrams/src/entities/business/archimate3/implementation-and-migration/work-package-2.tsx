import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORK_PACKAGE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.workPackage;strokeWidth=5;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function WorkPackage2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORK_PACKAGE_2)} />
}
