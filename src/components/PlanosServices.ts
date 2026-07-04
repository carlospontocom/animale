import { collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc, type Firestore } from 'firebase/firestore'
import { db } from '../firebase/index'

const firestore = db as Firestore

const useFirebase = import.meta.env.VITE_USE_FIREBASE === 'true'

const mockPlans = [
  {
    id: 'basico',
    name: 'Plano Básico',
    description: 'Ideal para cuidados essenciais do seu pet.',
    features: ['Banho mensal', 'Tosa higiênica', 'Check-up anual'],
    imageUrl: 'https://exemplo.com/plano-basico.jpg',
  },
  {
    id: 'vip',
    name: 'Plano VIP',
    description: 'Mais conforto e atenção para o seu bichinho.',
    features: ['Banho quinzenal', 'Tosa completa', 'Vacinação', 'Consultas semestrais'],
    imageUrl: 'https://exemplo.com/plano-vip.jpg',
  },
  {
    id: 'premium',
    name: 'Plano Premium',
    description: 'O tratamento mais completo e exclusivo.',
    features: [
      'Banho semanal',
      'Tosa estilizada',
      'Vacinação completa',
      'Consultas ilimitadas',
      'Serviços de emergência',
    ],
    imageUrl: 'https://exemplo.com/plano-premium.jpg',
  },
]

export async function getPlans() {
  if (!useFirebase) return mockPlans
  const querySnapshot = await getDocs(collection(firestore, 'planos'))
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function getPlanById(id: string) {
  if (!useFirebase) return mockPlans.find((p) => p.id === id)
  const docRef = doc(firestore, 'planos', id)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
}

export async function addPlan(id: string, data: any) {
  if (!useFirebase) {
    mockPlans.push({ id, ...data })
    return
  }
  await setDoc(doc(firestore, 'planos', id), data)
}

export async function updatePlan(id: string, data: any) {
  if (!useFirebase) {
    const index = mockPlans.findIndex((p) => p.id === id)
    if (index !== -1) mockPlans[index] = { ...mockPlans[index], ...data }
    return
  }
  await updateDoc(doc(firestore, 'planos', id), data)
}

export async function deletePlan(id: string) {
  if (!useFirebase) {
    const index = mockPlans.findIndex((p) => p.id === id)
    if (index !== -1) mockPlans.splice(index, 1)
    return
  }
  await deleteDoc(doc(firestore, 'planos', id))
}
