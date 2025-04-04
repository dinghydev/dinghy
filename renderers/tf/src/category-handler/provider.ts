import type { Props } from '@reactiac/base-components'
import type { ReactElement } from 'react'
import { globalCategory } from './globalCategory.ts'

export const provider = (
  category: string,
  tfRoot: Props,
  element: ReactElement,
) => globalCategory(category, tfRoot, element as any)
