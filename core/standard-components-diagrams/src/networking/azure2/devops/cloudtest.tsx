import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDTEST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/CloudTest.svg;strokeColor=none;',
  },
  _original_width: 58.8,
  _original_height: 68,
}

export function Cloudtest(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDTEST} {...props} _style={extendStyle(CLOUDTEST, props)} />
  )
}
