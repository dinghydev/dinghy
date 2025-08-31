import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDTEST = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/CloudTest.svg;strokeColor=none;',
  },
  _width: 58.8,
  _height: 68,
}

export function Cloudtest(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDTEST} {...props} _style={extendStyle(CLOUDTEST, props)} />
  )
}
