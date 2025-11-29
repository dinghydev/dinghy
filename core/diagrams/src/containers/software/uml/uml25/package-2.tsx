import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PACKAGE_2 = {
  _style: {
    container:
      'shape=folder;fontStyle=1;tabWidth=110;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;labelInHeader=1;container=1;collapsible=0;recursiveResize=0;whiteSpace=wrap;',
  },
}

export function Package2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PACKAGE_2)} />
}
