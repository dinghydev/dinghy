import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BITBUCKET = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Bitbucket_Logo.svg;strokeColor=none;',
  },
  _width: 57,
  _height: 50,
}

export function Bitbucket(props: DiagramNodeProps) {
  return (
    <Shape {...BITBUCKET} {...props} _style={extendStyle(BITBUCKET, props)} />
  )
}
