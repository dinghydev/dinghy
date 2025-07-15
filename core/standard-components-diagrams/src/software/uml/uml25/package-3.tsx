import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PACKAGE_3 = {
  _style: {
    group:
      'shape=folder;fontStyle=1;tabWidth=110;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;labelInHeader=1;container=1;collapsible=0;whiteSpace=wrap;',
  },
}

export function Package3(props: DiagramNodeProps) {
  return <Shape {...PACKAGE_3} {...props} />
}
